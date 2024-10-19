export const MobileContainer = ({ children }) => {
  return (
    <div className="w-full min-h-72 max-h-72 border-4 border-text-primary rounded-2xl flex justify-center">
      {children}
    </div>
  );
};
