import './admin.css';
import { HiMenuAlt3 } from 'react-icons/hi'
import AdminImg from '../assests/admin.png'
import food from '../assests/Rectangle 6.png'

function Admin() {
    return (
        <div className='admin_main'>
            <div>
                <div className="header_admin">
                    <div className='admin_firstdiv'>
                        <img src={AdminImg} width='50px' height='50px' className='adminImg' alt="" />
                        <div>
                            <p>Talha Khan</p>
                            <p>Admin</p>
                        </div>
                    </div>
                    <div>
                        <HiMenuAlt3 size={16} />
                    </div>
                </div>
                <hr />
                <div>
                    <h3>All Products</h3>
                    <div className='main_products_list'>
                        <div>
                            <img src={food} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;