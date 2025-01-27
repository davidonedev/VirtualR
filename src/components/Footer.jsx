const Footer = () => {
  return (
    <footer className="bg-slate-950 px-4 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h2 className="text-lg font-bold mb-4">
                    About us
                </h2>
                <p className="text-gray-300">
                    We are a team dedicated to providing the best products and services to our customers.
                </p>
            </div>
            <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                <ul>
                    <li><a href="#" className="hover:underline text-violet-500"></a>Home</li>
                    <li><a href="#" className=""></a>Benefícios</li>
                    <li><a href="#" className=""></a>Depoimentos</li>
                    <li><a href="#" className=""></a>Preços</li>
                    <li><a href="#" className=""></a>Contatos</li>
                </ul>
            </div>
            <div></div>
        </div>
    </footer>
  )
};

export default Footer;
