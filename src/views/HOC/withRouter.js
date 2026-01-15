import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                // Truyền trực tiếp các thuộc tính vào props để dùng cho tiện
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    }

    return ComponentWithRouterProp;
};

export default withRouter