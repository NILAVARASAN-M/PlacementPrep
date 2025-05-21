// UserGalleryComponent.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  _id: string;
  fullName: string;
  department: string;
  rollNumber: string;
  imageIds: string[];
}

const UserGalleryComponent: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users-with-images");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {users.map((user) => (
        <div key={user._id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{user.fullName}</h2>
          <p className="text-sm text-gray-600">{user.department} - {user.rollNumber}</p>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {user.imageIds  .map((img, index) => (
              <img
                key={index}
                src={`data:image/png;base64,${img}`}
                alt={`user-${user.fullName}-${index}`}
                className="w-full rounded shadow"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserGalleryComponent;