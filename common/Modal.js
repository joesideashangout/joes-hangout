// Modal Component
export const Modal = ({ isOpen, children }) => {
    return isOpen ? <div className='modal'>{children}</div> : null;
};
