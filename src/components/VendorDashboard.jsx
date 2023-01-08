import { Link } from 'react-router-dom'
import './css/VendorDashboard.css'
import vendor from './assets/vendor.png';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import VendorDashboardSidebar from './VendorDashbaordSidebar';
// import { useForceUpdate } from 'react-force-update';

function VendorDashboard() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    // const forceUpdate = useForceUpdate();

    // const forceUpdateHandler = () => {
    //   forceUpdate();
    // };

    return (

        <div className="vendor_dashboard">
            <div className="vendor_dashboard_left">
                <h3>Hello</h3>
                <h3>Hello</h3>
                <h3>Hello</h3>
                <h3>Hello</h3>
            </div>
            <div className="vendor_dashboard_right">
                <VendorDashboardSidebar />
            </div>
        </div>
    )
}
export default VendorDashboard