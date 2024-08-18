




import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logo from '../../../assets/logo_05.png';
import profile from '../../../assets/Icons/personprofile.png';
import Dashboard from '../../../assets/Dashboard_icon.png';
import dropdownUp from '../../../assets/Icons/dropdownUp.png';
import dropdownDown from '../../../assets/Icons/dropdown.png';
import LayoutaddProduct from '../LayoutSell/LayoutaddProduct';
import LayoutOrders from '../LayoutSell/LayoutSellOrders';
import LayoutSellOrders from '../LayoutSell/LayoutSellOrders';
import LayoutBid from '../LayoutBid/LayoutBid';
import LayoutCustomers from '../LayoutSell/LayoutCustomers';
import LayoutPayouts from '../LayoutSell/LayoutPaymentHistory';
import LayoutEarnings from '../LayoutSell/LayoutEarnings';
import LayoutReview from '../LayoutSell/LayoutShippingDetails';
import LayoutReturn from '../LayoutSell/LayoutSellReturn';
import LayoutAssignProduct from '../LayoutSell/LayoutRequestForQuote';
import LayoutAssignProductList from '../LayoutSell/LayoutSalesHistory';
// import LayoutAllRequestQuotes from '../LayoutSell/ReqestforQuote/LayoutAllRequestQuotes';
// import LayoutRequestQuoteProduct from '../LayoutSell/ReqestforQuote/LayoutRequestQuoteProduct';
// import LayoutProfileSetting from '../LayoutSell/LayoutSettings/LayoutProfileSetting';
// import LayoutUpsShipping from '../LayoutSell/LayoutSettings/LayoutUpsShipping';
// import LayoutFedexShipping from '../LayoutSell/LayoutSettings/LayoutFedexShipping';
// import LayoutShippingSetting from '../LayoutSell/LayoutSettings/LayoutShippingSetting';
// import LayoutManageSetting from '../LayoutSell/LayoutSettings/LayoutManageSetting';
import LayoutAddBulkProduct from '../LayoutSell/LayoutAddBulkProduct';
import LayoutPostingProducts from '../LayoutSell/LayoutProducts/LayoutPostingProducts';
import LayoutSalesHistory from '../LayoutSell/LayoutSalesHistory';
import LayoutShippingDetails from '../LayoutSell/LayoutShippingDetails';
import LayoutRequestForQuote from '../LayoutSell/LayoutRequestForQuote';
import LayoutSellReturn from '../LayoutSell/LayoutSellReturn';
import Signup from '../../Signup';
import LayoutPaymentHistory from '../LayoutSell/LayoutPaymentHistory';

function LayoutSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const [dropdownStates, setDropdownStates] = useState({
        buy: false,
        sell: false,
        request: false,
        settings: false,
    });

    const handleClick = (path) => {
        setActiveLink(path);
        navigate(path);
    };

    const toggleDropdown = (section) => {
        setDropdownStates((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const logos = [
        {
            src: profile,
            name: 'Sam Maddali',
            Shop_name: 'Valley Pharmacy',
        },
    ];

    const navItems = [
        {
            label: 'Dashboard',
            icon: Dashboard,
            to: '/layout',
        },
        {
            label: 'Buy',
            icon: Dashboard,
            section: 'buy',
            isOpen: dropdownStates.buy,
            links: [
                { to: '/layout/layoutbuy', label: 'Buy Products', icon: Dashboard },
                { to: '/layout/layoutwishlist', label: 'Wishlist', icon: Dashboard },
                { to: '/layout/layoutorderlist', label: 'OrderList', icon: Dashboard },
            ],
        },
        {
            label: 'Sell',
            icon: Dashboard,
            section: 'sell',
            isOpen: dropdownStates.sell,
            links: [
                { to: '/layout/addproduct', label: 'Add Product', icon: Dashboard },
                { to: '/layout/addbulkproduct', label: 'Add Bulk Product', icon :Dashboard},
                { to: '/layout/postingproducts', label: 'Posting Products', icon :Dashboard},
                { to: '/layout/sellorders', label: 'Orders', icon: Dashboard },
                { to: '/layout/sellcustomers', label: 'Customers', icon: Dashboard },
                { to: '/layout/sellpaymenthistory', label: 'Payment History', icon: Dashboard },
                { to: '/layout/sellearnings', label: 'Earnings', icon: Dashboard },
                { to: '/layout/sellreturn', label: 'Returns', icon: Dashboard },
                { to: '/layout/sellassignproductlist', label: 'Sales History', icon: Dashboard },
                { to: '/layout/sellreview', label: 'Shipping Details', icon: Dashboard },
                { to: '/layout/sellassignproducts', label: 'Request for Quote', icon: Dashboard },

            ],
        },
        // {
        //     label: 'Request for Quote',
        //     icon: Dashboard,
        //     section: 'request',
        //     isOpen: dropdownStates.request,
        //     links: [
        //         // { to: '/layout/layoutsell/layoutsellallrequestquotes', label: 'All Requested Quotes', icon: Dashboard },
        //         // { to: '/layout/layoutsell/layoutsellrequestproduct', label: 'Request Product', icon: Dashboard }
        //     ],
        // },
        // {
        //     label: 'Settings',
        //     icon: Dashboard,
        //     section: 'settings',
        //     isOpen: dropdownStates.settings,
        //     links: [
        //         // { to: '/layout/layoutsell/layoutprofilesetting', label: 'Profile Setting', icon: Dashboard },
        //         // { to: '/layout/layoutsell/layoutupsshipping', label: 'UPS Shipping', icon: Dashboard },
        //         // { to: '/layout/layoutsell/layoutfedexshipping', label: 'FedEx Shipping', icon: Dashboard },
        //         // { to: '/layout/layoutsell/layoutshippingsetting', label: 'Shipping Setting', icon: Dashboard },
        //         // { to: '/layout/layoutsell/layoutmanagesetting', label: 'Manage Shipping', icon: Dashboard }
        //     ],
        // },
        {
            label: 'Join',
            icon: Dashboard,
            to: '/signup',
        },
        {
            label: 'Bid',
            icon: Dashboard,
            to: '/layout/layoutbid',
        },
        {
            label: 'Setting',
            icon: Dashboard,
            to: '/layout/layoutbid',
        },
        {
            label: 'FAQs',
            icon: Dashboard,
            to: '/faqs',
        },
    ];

    return (
        <div className={`p-2 absolute h-full overflow-scroll z-[100] font-normal font-sans flex flex-col shadow-lg ${isCollapsed ? "min-w-16 items-center" : "min-w-64"}`} style={{ backgroundColor: 'rgba(14, 81, 140, 1)' }}>
            <div className='w-full flex flex-col justify-center items-center my-5'>
                <Link to='/app'>
                    <img src={logo} className='w-44 mb-2' alt='Logo' />
                </Link>
                <div className='flex w-40 h-28 justify-center items-center border rounded-md bg-white'>
                    {logos.map((logo, index) => (
                        <div key={index} className='flex justify-center flex-col items-center'>
                            <img src={logo.src} className='w-10 h-10 rounded-full ' alt='Profile' />
                            <p className='text-base text-red-500 font-semibold my-1'>{logo.Shop_name}</p>
                            <p className=' text-sm font-semibold'>{logo.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <nav className="space-y-2 text-[16px]">
                {navItems.map((item, index) => (
                    <div key={index}>
                        {item.links ? (
                            <div
                                className="flex items-center justify-between p-2 text-white hover:bg-gray-400 cursor-pointer"
                                onClick={() => toggleDropdown(item.section)}
                            >
                                <div className="flex items-center">
                                    <img src={item.icon} className="w-6 h-6" alt={item.label} />
                                    {!isCollapsed && <span className="ml-3">{item.label}</span>}
                                </div>
                                {!isCollapsed &&
                                    (item.isOpen ? (
                                        <FaChevronUp className={`mr-2 ${item.links.length > 0 ? "" : "hidden"}`} />
                                    ) : (
                                        <FaChevronDown className={`mr-2 ${item.links.length > 0 ? "" : "hidden"}`} />
                                    ))}
                            </div>
                        ) : (
                            <Link
                                to={item.to}
                                onClick={() => handleClick(item.to)}
                                className={`flex items-center p-2 ${activeLink === item.to ? "text-white bg-gray-400" : "text-white"} hover:text-white hover:bg-gray-400`}
                            >
                                <img src={item.icon} className="w-6 h-6" alt={item.label} />
                                {!isCollapsed && <span className="ml-3">{item.label}</span>}
                            </Link>
                        )}
                        {item.isOpen && !isCollapsed && item.links && (
                            <ul className="ml-6">
                                {item.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={link.to}
                                            onClick={() => handleClick(link.to)}
                                            className={`flex items-center p-2 ${activeLink === link.to ? "text-white bg-gray-400" : "text-white"} hover:text-white hover:bg-gray-400`}
                                        >
                                            <img src={link.icon} className="w-4 h-4" alt={link.label} />
                                            <span className="ml-3">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default LayoutSidebar;
