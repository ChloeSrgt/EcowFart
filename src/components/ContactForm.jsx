import { useState } from "react";
import ContactMessage from "../components/ContactMessage";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const MAX_LENGTH = 30;

  const [content, setContent] = useState('');
  const handleChange = event => {
    if (event.target.value.length <= MAX_LENGTH) {
      setContent(event.target.value);
    }
  };

  const [isUserClick, setIsUserClick] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsUserClick(!isUserClick);
  }

  const maximumReached = content.length >= MAX_LENGTH;


  return (
    <div className="contact">
      <form name="contact" method="post">
        <label htmlFor="name">Nom - Société *</label>
        <input
          className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
          id="name"
          name="name"
          type="text"
          value={content}
          placeholder="Champ obligatoire"
          onChange={handleChange}
        />

        <label htmlFor="email">Email *</label>
        <input
        className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
          id="email"
          type="text"
          value={content}
          name="email"
          placeholder="Champ obligatoire"
          onChange={handleChange}
        />

        <label htmlFor="objet">Objet *</label>
        <input
        className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
          id="objet"
          type="text"
          name="objet"
          value={content}
          placeholder="Champ obligatoire"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Dites-nous tout"
        />

        <button
          className="contactButton"
          type="submit"
          value="submit"
          onClick={handleClick}
        >
          Envoyer
        </button>
        {isUserClick && <ContactMessage />}
      </form>
    </div>
  );
}