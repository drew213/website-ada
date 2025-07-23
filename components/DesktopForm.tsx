"use client";

import { Html } from "@react-three/drei";
import { Form, Label, Input, Submit } from "r3f-form";
import React from "react";

export default function DesktopForm() {
  return (
    <Html position={[0, 1, -0.95]} center>
      <form
        style={{
          background: "",
          padding: "1rem",
          borderRadius: "8px",
          minWidth: "200px",
          minHeight: "300px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          // handle form submission
        }}
      >
        <label>
          Name
          <input name="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Message
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </Html>
  );
}
