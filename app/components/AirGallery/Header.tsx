export const Header = ({ closeAction }: { closeAction: any }) => (
  <div className="flex items-center px-7 py-5 md:px-32">
    <div
      onClick={closeAction}
      className="cursor-pointer rounded-full p-2 hover:bg-gray-50"
    >
      <BackIcon />
    </div>
  </div>
);

const BackIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7076 25.2925C20.8005 25.3854 20.8742 25.4957 20.9244 25.6171C20.9747 25.7385 21.0006 25.8686 21.0006 26C21.0006 26.1314 20.9747 26.2615 20.9244 26.3829C20.8742 26.5043 20.8005 26.6146 20.7076 26.7075C20.6146 26.8004 20.5043 26.8741 20.383 26.9244C20.2616 26.9747 20.1314 27.0006 20.0001 27.0006C19.8687 27.0006 19.7386 26.9747 19.6172 26.9244C19.4958 26.8741 19.3855 26.8004 19.2926 26.7075L9.29255 16.7075C9.19958 16.6146 9.12582 16.5043 9.07549 16.3829C9.02517 16.2615 8.99927 16.1314 8.99927 16C8.99927 15.8686 9.02517 15.7385 9.07549 15.6171C9.12582 15.4957 9.19958 15.3854 9.29255 15.2925L19.2926 5.29251C19.4802 5.10487 19.7347 4.99945 20.0001 4.99945C20.2654 4.99945 20.5199 5.10487 20.7076 5.29251C20.8952 5.48015 21.0006 5.73464 21.0006 6.00001C21.0006 6.26537 20.8952 6.51987 20.7076 6.70751L11.4138 16L20.7076 25.2925Z"
      fill="black"
    />
  </svg>
);
