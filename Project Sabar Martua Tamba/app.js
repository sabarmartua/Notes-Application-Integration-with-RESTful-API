const notesData = [
  {
    id: 'notes-jT-jjsyz61J8XKiI',
    title: 'Welcome to Notes, Dimas!',
    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
    createdAt: '2022-07-28T10:03:12.594Z',
    archived: false,
  },
  {
    id: 'notes-aB-cdefg12345',
    title: 'Meeting Agenda',
    body: 'Discuss project updates and assign tasks for the upcoming week.',
    createdAt: '2022-08-05T15:30:00.000Z',
    archived: false,
  },
  {
    id: 'notes-XyZ-789012345',
    title: 'Shopping List',
    body: 'Milk, eggs, bread, fruits, and vegetables.',
    createdAt: '2022-08-10T08:45:23.120Z',
    archived: false,
  },
  {
    id: 'notes-1a-2b3c4d5e6f',
    title: 'Personal Goals',
    body: 'Read two books per month, exercise three times a week, learn a new language.',
    createdAt: '2022-08-15T18:12:55.789Z',
    archived: false,
  },
  {
    id: 'notes-LMN-456789',
    title: 'Recipe: Spaghetti Bolognese',
    body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
    createdAt: '2022-08-20T12:30:40.200Z',
    archived: false,
  },
  {
    id: 'notes-QwErTyUiOp',
    title: 'Workout Routine',
    body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
    createdAt: '2022-08-25T09:15:17.890Z',
    archived: false,
  },
  {
    id: 'notes-abcdef-987654',
    title: 'Book Recommendations',
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: '2022-09-01T14:20:05.321Z',
    archived: false,
  },
  {
    id: 'notes-zyxwv-54321',
    title: 'Daily Reflections',
    body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
    createdAt: '2022-09-07T20:40:30.150Z',
    archived: false,
  },
  {
    id: 'notes-poiuyt-987654',
    title: 'Travel Bucket List',
    body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
    createdAt: '2022-09-15T11:55:44.678Z',
    archived: false,
  },
  {
    id: 'notes-asdfgh-123456',
    title: 'Coding Projects',
    body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
    createdAt: '2022-09-20T17:10:12.987Z',
    archived: false,
  },
  {
    id: 'notes-5678-abcd-efgh',
    title: 'Project Deadline',
    body: 'Complete project tasks by the deadline on October 1st.',
    createdAt: '2022-09-28T14:00:00.000Z',
    archived: false,
  },
  {
    id: 'notes-9876-wxyz-1234',
    title: 'Health Checkup',
    body: 'Schedule a routine health checkup with the doctor.',
    createdAt: '2022-10-05T09:30:45.600Z',
    archived: false,
  },
  {
    id: 'notes-qwerty-8765-4321',
    title: 'Financial Goals',
    body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
    createdAt: '2022-10-12T12:15:30.890Z',
    archived: false,
  },
  {
    id: 'notes-98765-54321-12345',
    title: 'Holiday Plans',
    body: 'Research and plan for the upcoming holiday destination.',
    createdAt: '2022-10-20T16:45:00.000Z',
    archived: false,
  },
  {
    id: 'notes-1234-abcd-5678',
    title: 'Language Learning',
    body: 'Practice Spanish vocabulary for 30 minutes every day.',
    createdAt: '2022-10-28T08:00:20.120Z',
    archived: false,
  },
];

console.log(notesData);


// Fungsi untuk menampilkan indikator loading
function showLoadingIndicator() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  loadingIndicator.style.display = 'block';
}

// Fungsi untuk menyembunyikan indikator loading
function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  loadingIndicator.style.display = 'none';
}

// Menggunakan Fetch API untuk mendapatkan daftar catatan dari API
async function fetchNotes() {
  try {
    showLoadingIndicator(); // Menampilkan indikator loading
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
    if (!response.ok) {
      throw new Error('Gagal mengambil catatan');
    }
    const responseData = await response.json();
    const notes = responseData.data; // Mengakses properti 'data'
    hideLoadingIndicator(); // Menyembunyikan indikator loading
    return notes; // Mengembalikan data catatan dari respons API
  } catch (error) {
    console.error('Error fetching notes:', error);
    hideLoadingIndicator(); // Menyembunyikan indikator loading jika terjadi kesalahan
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
}

// Menggunakan Fetch API untuk membuat catatan baru
async function createNote(title, body) {
  try {
    showLoadingIndicator(); // Menampilkan indikator loading
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });
    if (!response.ok) {
      throw new Error('Gagal membuat catatan');
    }
    const data = await response.json();
    hideLoadingIndicator(); // Menyembunyikan indikator loading
    return data; // Mengembalikan data catatan yang baru dibuat
  } catch (error) {
    console.error('Error creating note:', error);
    hideLoadingIndicator(); // Menyembunyikan indikator loading jika terjadi kesalahan
    return null; // Mengembalikan null jika terjadi kesalahan
  }
}

// Menggunakan Fetch API untuk menghapus catatan berdasarkan ID
async function deleteNote(noteId) {
  try {
    showLoadingIndicator(); // Menampilkan indikator loading
    const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Gagal menghapus catatan');
    }
    hideLoadingIndicator(); // Menyembunyikan indikator loading
    return true; // Mengembalikan true jika penghapusan berhasil
  } catch (error) {
    console.error('Error deleting note:', error);
    hideLoadingIndicator(); // Menyembunyikan indikator loading jika terjadi kesalahan
    return false; // Mengembalikan false jika terjadi kesalahan
  }
}

// Kelas untuk item catatan
class NoteItem extends HTMLElement {
  connectedCallback() {
    const note = JSON.parse(this.getAttribute('data-note'));
    this.innerHTML = `
            <div class="note">
                <h2>${note.title}</h2>
                <p>${note.body}</p>
                <button class="delete-button" data-note-id="${note.id}">Delete</button>
            </div>
        `;
    this.querySelector('.delete-button').addEventListener('click', this.deleteNote.bind(this));
  }

  async deleteNote() {
    const noteId = this.querySelector('.delete-button').getAttribute('data-note-id');
    const success = await deleteNote(noteId);
    if (success) {
      this.remove(); // Hapus elemen catatan dari tampilan jika penghapusan berhasil
    } else {
      alert('Gagal menghapus catatan. Silakan coba lagi.');
    }
  }
}
customElements.define('note-item', NoteItem);

// Kelas untuk AppBar
class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header>
                <h1>Notes App</h1>
            </header>
        `;
  }
}
customElements.define('app-bar', AppBar);

// Kelas untuk input catatan
class NoteInput extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <input type="text" id="titleInput" placeholder="Title" required>
      <textarea id="bodyInput" placeholder="Body" required></textarea>
      <button id="addNoteButton" type="button">Add Note</button>
    `;
    this.querySelector('#addNoteButton').addEventListener('click', this.addNote.bind(this));
  }

  async addNote() {
    const titleInput = this.querySelector('#titleInput');
    const bodyInput = this.querySelector('#bodyInput');
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
  
    if (title && body) {
      const newNote = await createNote(title, body);
      if (newNote) {
        console.log('Catatan baru berhasil dibuat:', newNote);
        const notesList = document.querySelector('#notesList');
        const noteElement = document.createElement('note-item');
        noteElement.setAttribute('data-note', JSON.stringify(newNote));
        notesList.appendChild(noteElement);
  
        titleInput.value = ''; // Reset judul input
        bodyInput.value = ''; // Reset isi input
      } else {
        alert('Gagal menambahkan catatan. Silakan coba lagi.');
      }
    } else {
      alert('Mohon isi judul dan isi catatan.');
    }
  }
  
}
customElements.define('note-input', NoteInput);

// Kelas untuk aplikasi Notes
class NotesApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-bar></app-bar>
            <div class="notes-container">
                <note-input></note-input>
                <div id="notesList" class="notes-grid"></div>
            </div>
            <div id="loadingIndicator" style="display: none;"> <!-- Indikator loading -->
                Loading...
            </div>
        `;
    this.renderNotes();
  }

  async renderNotes() {
    const notesList = this.querySelector('#notesList');
    notesList.innerHTML = ''; // Bersihkan catatan yang ada
    const notes = await fetchNotes();
    notes.forEach(note => {
      const noteElement = document.createElement('note-item');
      noteElement.setAttribute('data-note', JSON.stringify(note));
      notesList.appendChild(noteElement);
    });
  }
}

customElements.define('app-notes', NotesApp);
