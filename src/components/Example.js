import React from 'react'

export default function Example() {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
      </header>

      <main>
        <section>
          <h2>Student Management</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>johndoe@example.com</td>
                <td>555-1234</td>
                <td>
                  <button onclick="editStudent(1)">Edit</button>
                  <button onclick="deleteStudent(1)">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>janedoe@example.com</td>
                <td>555-5678</td>
                <td>
                  <button onclick="editStudent(2)">Edit</button>
                  <button onclick="deleteStudent(2)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button onclick="addStudent()">Add Student</button>
        </section>

        <section>
          <h2>Teacher Management</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Smith</td>
                <td>johnsmith@example.com</td>
                <td>555-1234</td>
                <td>
                  <button onclick="editTeacher(1)">Edit</button>
                  <button onclick="deleteTeacher(1)">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>janesmith@example.com</td>
                <td>555-5678</td>
                <td>
                  <button onclick="editTeacher(2)">Edit</button>
                  <button onclick="deleteTeacher(2)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button onclick="addTeacher()">Add Teacher</button>
        </section>
      </main>

      <footer>
        <p>Copyright &copy; 2023</p>
      </footer>
    </div>
  );
}
