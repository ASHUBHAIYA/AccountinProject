// functions/api/contact.js
export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    console.log("--> Received payload:", JSON.stringify(data, null, 2));

    const name = data.name || data.fullName || "Prospective Client";
    const phone = data.phone || data.mobile || "Not provided";
    const service = data.service || "General Inquiry";
    const message = data.message || "No additional notes provided";
    const email = data.email || ""; // optional
    const hp = data.hp;

    // Honeypot spam check
    if (hp) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Only require Name and Phone/Message for a consultation query
    if (!name || (!phone && !message)) {
      return new Response(
        JSON.stringify({ error: "Name and at least phone or message are required." }),
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
        subject: `New Client Query: ${name} (${service})`,
        html: `
          <h2>New Consultation Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          <p><strong>User Email:</strong> ${email || "Not provided"}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `
      })
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Resend API error:", errText);
      return new Response(
        JSON.stringify({ error: "Failed to send email." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Query submitted successfully!" }),
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