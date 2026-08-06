function DashboardCard({ title, count }) {
  return (
    <div className="card dashboard-card text-center p-4">
      <h5>{title}</h5>

      <h1>{count}</h1>
    </div>
  );
}

export default DashboardCard;