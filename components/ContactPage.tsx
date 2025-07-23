import Contact3DBackground from "./ContactBackground";
import ContactForm from "./ContactForm";
import { EarthCanvas } from "./canvas";

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 3D Background Layer */}
      <div className="z-0 absolute inset-0">
        <Contact3DBackground />
      </div>

      {/* Foreground Content */}
      <div className="z-10 relative flex justify-center items-center px-2 py-8 min-h-screen">
        <div className="flex flex-col bg-white dark:bg-gray-800 shadow-lg mx-auto p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-[95vw] sm:max-w-md md:max-w-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
