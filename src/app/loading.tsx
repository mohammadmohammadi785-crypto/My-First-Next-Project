export default function loading() {
  return (
    <div className="flex absolute z-20 top-0 right-0 justify-center w-full h-screen items-center">
      <div className="animate-spin w-20 h-20 border-dotted border-white border-8 rounded-full"></div>
    </div>
  );
}
