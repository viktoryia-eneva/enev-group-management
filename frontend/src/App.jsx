import './App.css'

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>ENEV GROUP</h2>
        <p>Management System</p>

        <nav>
          <a href="#dashboard">Начало</a>
          <a href="#offers">Актуални оферти</a>
          <a href="#bookings">Резервации</a>
          <a href="#finance">Финанси</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div>
            <h1>Dashboard</h1>
            <p>Добре дошли в Enev Group Management!</p>
          </div>
          <button>+ Нова резервация</button>
        </header>

        <section className="stats">
          <div className="stat-card">
            <h3>Активни оферти</h3>
            <p>0</p>
          </div>

          <div className="stat-card">
            <h3>Резервации</h3>
            <p>0</p>
          </div>

          <div className="stat-card">
            <h3>Свободни места</h3>
            <p>0</p>
          </div>

          <div className="stat-card">
            <h3>Приходи</h3>
            <p>€0</p>
          </div>

           <div className="bookings">
            <h2>Последни резервации</h2>
            <p>Все още няма добавени резервации</p>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App