export default function Footer() {
  return (
    <div className="footer-inner-container">
      <img
        className=""
        src="https://img.freepik.com/free-photo/front-view-smiley-women-taking-selfie_23-2149734544.jpg?size=338&ext=jpg"
        alt="footer image"
      />
      <div className="footer-text-container">
        <div className="footer-text-inner-container">
          <span>
            {" "}
            <strong>İletişim</strong>{" "}
          </span>
          <p>
            İletişim Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
            Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
          </p>
        </div>
        <div>
          {" "}
          <p>Email: bilgi@tesodev.com</p>{" "}
        </div>
      </div>
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2795624019236!2d28.888373175869244!3d41.01913931875643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1str!2str!4v1697655289645!5m2!1str!2str"
          width="460"
          height="220"
      
        ></iframe>
      </div>
    </div>
  );
}
