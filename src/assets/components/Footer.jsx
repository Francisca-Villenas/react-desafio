const Footer = ({textBadge, textGallery, textFooter}) => {
    return (
    <div className="footer-1">   
    <h5 className="text-center">{textBadge}<span className="badge bg-secondary">{textGallery}</span></h5>
    <h6 className="text-center">{textFooter}</h6>
    </div>
    );
};

export default Footer;