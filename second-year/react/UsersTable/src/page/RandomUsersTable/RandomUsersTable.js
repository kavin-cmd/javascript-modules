import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RandomUsersTable.css";

// User Service
const fetchUsers = async (page = 1, limit = 5) => {
  try {
    const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data.data.data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// components/ui/header.js
export function Header() {
  return (
    <header className="header">
      <h1>Random Users</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

// components/ui/footer.js
export function Footer() {
  return <footer className="footer">&copy; 2025 Random Users App</footer>;
}

// components/ui/table.js
export function Table({ children }) {
  return <table className="table">{children}</table>;
}

// components/ui/card.js
export function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={"card-content " + className}>{children}</div>;
}

// components/ui/avatar.js
export function Avatar({ children }) {
  return <div className="avatar">{children}</div>;
}

// components/ui/skeleton.js
export function Skeleton({ className }) {
  return (
    <div className={"skeleton " + className}>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"></div>
    </div>
  );
}

// RandomUsersTable.js
export default function RandomUsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchUsers(page).then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, [page]);

  return (
    <div className="container">
      <div className="content">
        <Card>
          <CardContent>
            {loading ? (
              <Skeleton />
            ) : (
              <>
                <Table>
                  <thead>
                    <tr>
                      <th>Avatar</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <Avatar>
                            <img src={user.picture.thumbnail} alt={user.name.first} />
                          </Avatar>
                        </td>
                        <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{`${user.location.city}, ${user.location.state}, ${user.location.country}`}</td>
                        <td>{user.login.username}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="pagination">
                  <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Previous
                  </button>
                  <span>Page {page}</span>
                  <button onClick={() => setPage((prev) => prev + 1)}>
                    Next
                  </button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
