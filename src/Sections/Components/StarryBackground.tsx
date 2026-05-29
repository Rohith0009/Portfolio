const StarryBackground = () => {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.5
  }));

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
        {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-60"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
