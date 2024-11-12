import '../App.css' /* Fix this import*/
import { BackdropTopAnchor } from './backdroptop';
import { BackdropBottomAnchor } from './backdropbottom';

export const Backdrop = ({ children }) => {
    return (
        <div className="relative gradient-container"> 
            <BackdropTopAnchor/>
            <BackdropBottomAnchor/>
            {children}
        </div>
    );
}