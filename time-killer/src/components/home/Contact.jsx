const Contact = () => {
  return (
    <section className="contact">
      <form action="">
        <label htmlFor="name">Name: </label>
        <input type="" id="name" name="name" placeholder="John Doe" />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
        />
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          cols="70"
          rows="1"
          placeholder="Please leave feedback or any other games you would like to see!"
        ></textarea>
        <button></button>
      </form>
    </section>
  );
};

export default Contact;
