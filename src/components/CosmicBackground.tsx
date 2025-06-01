const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Main cosmic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

      {/* Purple cosmic clouds */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent" />

      {/* Radial cosmic glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Nebula effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
    </div>
  );
};

export default CosmicBackground;
