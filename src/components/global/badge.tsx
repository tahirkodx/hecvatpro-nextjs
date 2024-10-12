const Badge = ({ text }: { text: string }) => {
  return (
    <div className="bg-gray-700 rounded-full w-fit px-3.5 py-2 text-white text-xs">
      {text}
    </div>
  );
};

export default Badge;
