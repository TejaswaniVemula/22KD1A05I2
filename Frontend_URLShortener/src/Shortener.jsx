function Shortener() {
  return (
    <div className="Shortener">
      <h2>Shorten Your URL</h2>
      <form>
        <input type="text" placeholder="Enter URL to shorten" />
        <button type="submit">Shorten</button>
      </form>
    </div>
  );
}
export default Shortener;