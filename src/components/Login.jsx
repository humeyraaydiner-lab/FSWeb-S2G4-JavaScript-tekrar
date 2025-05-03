import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordStrong = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  const isFormValid = isEmailValid && isPasswordStrong && accepted;

  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid) {
      navigate("/success");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isEmailValid && email && <p className="error">Geçerli bir email girin.</p>}

      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isPasswordStrong && password && (
        <p className="error">En az 8 karakter, 1 büyük harf ve 1 özel karakter içermelidir.</p>
      )}

      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Şartları kabul ediyorum
      </label>

      <button disabled={!isFormValid}>Giriş Yap</button>
    </form>
  );
}
// login dosyasına yorum satırı
