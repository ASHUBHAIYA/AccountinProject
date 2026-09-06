import { onRequestPost as __api_contact_js_onRequestPost } from "C:\\Users\\abhis\\Desktop\\DEVOPS\\Projects\\EKS-latest-Terraform-Code-main\\gst-filling-ssk\\Accountinger\\AccountinProject\\functions\\api\\contact.js"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_contact_js_onRequestPost],
    },
  ]