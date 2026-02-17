export default function Footer() {
  return (
    <footer id="footer">
      <p>&copy; 2025 Jiyoung Kim. All rights reserved.</p>
      <div className="footer-social">
        <a
          href="https://www.youtube.com/@playedbyjiyoungkim/videos"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        >
          <svg
            className="social-icon social-icon-filled"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23.2 7.4a2.9 2.9 0 0 0-2-2C19.5 5 12 5 12 5s-7.5 0-9.2.4a2.9 2.9 0 0 0-2 2A30.4 30.4 0 0 0 .8 12a30.4 30.4 0 0 0 .4 4.6 2.9 2.9 0 0 0 2 2C4.5 19 12 19 12 19s7.5 0 9.2-.4a2.9 2.9 0 0 0 2-2A30.4 30.4 0 0 0 23.2 12a30.4 30.4 0 0 0-.4-4.6zM9.7 15.2V8.8l5.8 3.2-5.8 3.2z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/g_0_kim_?igsh=NWJ0cGxjcWxjcXZ6&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <svg
            className="social-icon social-icon-outline"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17" cy="7" r="1.2" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/share/1BzU4SVno1/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <svg
            className="social-icon social-icon-filled"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
