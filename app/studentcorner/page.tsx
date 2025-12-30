"use client";
import { Header } from "@/components/common/Header";
import React, { useEffect, useState } from "react";

const API_BASE_URL = "https://api.rahuldev.live/api/v1";

interface Person {
  name: string;
  image?: string;
  type: "alumni" | "student";
  regNo: string;
}

// Dummy Students Data
const dummyStudents: Person[] = [
  {
    name: "Rahul Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    type: "student",
    regNo: "KP-2024-001",
  },
  {
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    type: "student",
    regNo: "KP-2024-002",
  },
  {
    name: "Amit Patel",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    type: "student",
    regNo: "KP-2023-015",
  },
  {
    name: "Sneha Das",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    type: "student",
    regNo: "KP-2024-003",
  },
  {
    name: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    type: "student",
    regNo: "KP-2024-004",
  },
  {
    name: "Anjali Mehta",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    type: "student",
    regNo: "KP-2023-018",
  },
  {
    name: "Ravi Gupta",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    type: "student",
    regNo: "KP-2024-005",
  },
  {
    name: "Meera Iyer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    type: "student",
    regNo: "KP-2024-006",
  },
  {
    name: "Arjun Reddy",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
    type: "student",
    regNo: "KP-2023-022",
  },
  {
    name: "Kavya Nair",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    type: "student",
    regNo: "KP-2024-007",
  },
  {
    name: "Sanjay Mishra",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400",
    type: "student",
    regNo: "KP-2023-025",
  },
  {
    name: "Divya Krishnan",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    type: "student",
    regNo: "KP-2024-008",
  },
];

// Dummy Alumni Data
const dummyAlumni: Person[] = [
  {
    name: "Dr. Rajesh Verma",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    type: "alumni",
    regNo: "REG-2020-045",
  },
  {
    name: "Sunita Kapoor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    type: "alumni",
    regNo: "REG-2019-032",
  },
  {
    name: "Manoj Tiwari",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400",
    type: "alumni",
    regNo: "REG-2021-018",
  },
  {
    name: "Pooja Desai",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    type: "alumni",
    regNo: "REG-2020-056",
  },
  {
    name: "Kiran Bedi",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400",
    type: "alumni",
    regNo: "REG-2018-023",
  },
  {
    name: "Aditya Chopra",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400",
    type: "alumni",
    regNo: "REG-2021-067",
  },
  {
    name: "Neha Joshi",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
    type: "alumni",
    regNo: "REG-2019-041",
  },
  {
    name: "Suresh Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    type: "alumni",
    regNo: "REG-2020-089",
  },
];

const FeesAndAlumni: React.FC = () => {
  const [batch, setBatch] = useState("");
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const [people, setPeople] = useState<Person[]>([]);
  const [students, setStudents] = useState<Person[]>(dummyStudents);
  const [alumni, setAlumni] = useState<Person[]>(dummyAlumni);

  const padRoll = (roll: string) => roll.padStart(3, "0");

  /* ------------------ FETCH STUDENT DETAILS ------------------ */
  useEffect(() => {
    if (!batch || !roll) return;

    const fetchStudentDetails = async () => {
      try {
        const studentId = `${batch}-${padRoll(roll)}`;
        const res = await fetch(`${API_BASE_URL}/student/basic/${studentId}`);
        const data = await res.json();

        if (res.ok) {
          setStudentName(data.name || "");
          setStudentEmail(data.email || "");
        } else {
          setStudentName("");
          setStudentEmail("");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchStudentDetails();
  }, [batch, roll]);

  /* ------------------ LOGIN ------------------ */
  const handleLogin = async () => {
    if (!batch || !roll || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/student/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: `${batch}-${padRoll(roll)}`,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid login");
        return;
      }

      localStorage.setItem("token", data.token);
      window.location.href = "/studentdashboard.html";
    } catch {
      alert("Server error");
    }
  };

  /* ------------------ FETCH ALUMNI + STUDENTS ------------------ */
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [alumniRes, studentRes] = await Promise.all([
          fetch(`${API_BASE_URL}/alumnis`),
          fetch(`${API_BASE_URL}/all-students`),
        ]);

        const alumniData = await alumniRes.json();
        const studentData = await studentRes.json();

        const alumniCards: Person[] = Array.isArray(alumniData)
          ? alumniData.map((a) => ({
              name: a.name,
              image: a.imageUrl,
              type: "alumni",
              regNo: a.RegistrationNumber || "REGISTERED",
            }))
          : [];

        const studentCards: Person[] = Array.isArray(studentData)
          ? studentData.map((s) => ({
              name: s.name,
              image: s.photoUrl,
              type: "student",
              regNo: "STUDENT",
            }))
          : [];

        setStudents(studentCards);
        setAlumni(alumniCards);
        setPeople([...alumniCards, ...studentCards]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAll();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#280116" }}>
      <Header />
      {/* ================= HEADER ================= */}
      <div className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="courgette-regular text-4xl lg:text-5xl text-orange-500 text-center mb-2">
            Student Corner
          </h1>
          <p className="font-amaranth text-amber-200 text-center text-lg">
            Login for fees payment and view our alumni & students
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-10 space-y-10">
        {/* ================= FEES LOGIN ================= */}
        <section className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h2
            className="font-amaranth text-2xl font-bold text-center mb-6"
            style={{ color: "#280116" }}
          >
            Fees Payment Login
          </h2>

          <div className="space-y-4">
            <input
              placeholder="Batch Code"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition"
              style={{ color: "#280116" }}
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            />

            <input
              placeholder="Roll No"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition"
              style={{ color: "#280116" }}
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />

            <input
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-200"
              style={{ color: "#280116" }}
              value={studentName}
              readOnly
            />

            <input
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-200"
              style={{ color: "#280116" }}
              value={studentEmail}
              readOnly
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition"
              style={{ color: "#280116" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full text-white py-3 rounded-lg font-bold font-amaranth text-lg hover:opacity-90 transition shadow-md"
              style={{ backgroundColor: "#cb2d73" }}
            >
              Login
            </button>
          </div>
        </section>

        {/* ================= CURRENT STUDENTS ================= */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="font-amaranth text-3xl font-bold"
              style={{ color: "#280116" }}
            >
              Current Students
            </h2>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-amaranth"
              style={{ backgroundColor: "#016993" }}
            >
              <span>👨‍🎓</span>
              <span>{students.length} Students</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {students.map((student, idx) => (
              <StudentCard key={idx} student={student} />
            ))}
          </div>

          {students.length === 0 && (
            <div className="text-center py-8">
              <p className="font-amaranth text-lg" style={{ color: "#280116" }}>
                Loading students...
              </p>
            </div>
          )}
        </section>

        {/* ================= REGISTERED ALUMNI ================= */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="font-amaranth text-3xl font-bold"
              style={{ color: "#280116" }}
            >
              Registered Alumni
            </h2>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-amaranth"
              style={{ backgroundColor: "#cb2d73" }}
            >
              <span>🎓</span>
              <span>{alumni.length} Alumni</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {alumni.map((alum, idx) => (
              <AlumniCard key={idx} alumni={alum} />
            ))}
          </div>

          {alumni.length === 0 && (
            <div className="text-center py-8">
              <p className="font-amaranth text-lg" style={{ color: "#280116" }}>
                Loading alumni...
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

function StudentCard({ student }: { student: Person }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square border-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
        {/* Image Section - 60% */}
        <div className="h-3/5 relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
          {student.image ? (
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
              No Image
            </div>
          )}
          {/* Badge Overlay */}
          <div
            className="absolute top-2 right-2 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
            style={{ backgroundColor: "#016993" }}
          >
            <span className="mr-1">📚</span>
            ACTIVE
          </div>
        </div>

        {/* Name Section - 20% */}
        <div className="h-1/5 flex items-center justify-center px-3 bg-white">
          <div className="text-center">
            <p
              className="font-amaranth font-bold text-sm line-clamp-2"
              style={{ color: "#280116" }}
            >
              {student.name}
            </p>
          </div>
        </div>

        {/* Badge Section - 20% */}
        <div className="h-1/5 flex items-center px-3 pb-3">
          <div
            className="w-full rounded-full py-2 text-center text-white font-amaranth font-bold text-xs shadow-md"
            style={{ backgroundColor: "#016993" }}
          >
            <span className="mr-1">🎓</span>
            STUDENT
          </div>
        </div>
      </div>
    </div>
  );
}

function AlumniCard({ alumni }: { alumni: Person }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square border-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
        {/* Image Section - 60% */}
        <div className="h-3/5 relative overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100">
          {alumni.image ? (
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
              No Image
            </div>
          )}
          {/* Badge Overlay */}
          <div
            className="absolute top-2 right-2 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
            style={{ backgroundColor: "#cb2d73" }}
          >
            <span className="mr-1">⭐</span>
            CERTIFIED
          </div>
        </div>

        {/* Name Section - 20% */}
        <div className="h-1/5 flex items-center justify-center px-3 bg-white">
          <div className="text-center">
            <p
              className="font-amaranth font-bold text-sm line-clamp-2"
              style={{ color: "#280116" }}
            >
              {alumni.name}
            </p>
          </div>
        </div>

        {/* Badge Section - 20% */}
        <div className="h-1/5 flex items-center px-3 pb-3">
          <div
            className="w-full rounded-full py-2 text-center text-white font-amaranth font-bold text-xs shadow-md"
            style={{ backgroundColor: "#cb2d73" }}
          >
            <span className="mr-1">🏆</span>
            {alumni.regNo}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeesAndAlumni;
