function Moreinfo() {
  return (
    <div className="moreinfo-page bg-gray-800 text-white p-6 min-h-screen">
      <div className="moreinfo-container flex flex-col md:flex-row justify-between gap-4 mb-6">
        
        <div className="moreinfo-item">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:bayusewmehon@gmail.com"
            className="hover:underline"
          >
            bayusewmehon@gmail.com
          </a>
        </div>

        <div className="moreinfo-item">
          <strong>Phone:</strong>{" "}
          <a
            href="tel:0920763944"
            className="hover:underline"
          >
            0920763944
          </a>
        </div>

        <div className="moreinfo-item">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/sewmehon-bayu-96131b162/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Profile
          </a>
        </div>

      </div>

      <p className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sewmehon Bayu. All rights reserved.
      </p>
    </div>
  );
}

export default Moreinfo;
