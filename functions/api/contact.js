// functions/api/contact.js
export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    
    // Log the exact payload received in your terminal
    console.log("--> Received payload:", JSON.stringify(data, null, 2));

    const { name, email, phone, service, message, hp } = data;

    // Check honeypot
    if (hp) {
      console.warn("Spam honeypot triggered");
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Detailed check for missing fields
    if (!name || !email || !message) {
      console.warn("Validation failed. Missing fields:", {
        hasName: Boolean(name),
        hasEmail: Boolean(email),
        hasMessage: Boolean(message)
      });
      return new Response(
        JSON.stringify({
          error: "Validation failed",
          missing: {
            name: !name,
            email: !email,
            message: !message
          }
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = context.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY in environment variables.");
      return new Response(
        JSON.stringify({ error: "Server mail configuration missing." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["abhishek791996@gmail.com"],
        reply_to: email,
        subject: `New Inquiry from ${name} - ${service || "General"}`,
        html: `
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service:</strong> ${service || "Not selected"}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\\n/g, "<br/>")}</p>
        `
      })
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Resend API error:", errText);
      return new Response(
        JSON.stringify({ error: "Failed to deliver email." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Your message has been sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Handler error:", err);
    return new Response(
      JSON.stringify({ error: "An internal error occurred." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}