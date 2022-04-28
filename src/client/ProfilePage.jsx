import * as React from "react";
import {useLoading} from "./useLoading";
import {Link} from "react-router-dom";
import {LoadingView} from "./LoadingView";
import {ErrorView} from "./ErrorView";


export function ProfilePage({loadProfile}) {
    const {loading, error, data} = useLoading(async () => await loadProfile());

    if (loading) {
        return <LoadingView/>;
    }
    if (error) {
        return
            <ErrorView/>;

    }
    return (

        <div><h1>Profile Page</h1>
            <div>{data.name}</div>
            <div>{data.email}</div>
            <div>{data.pid}</div>
            {data.picture && (
                <div>
                    <img src={data.picture} />
                </div>
            )}
            <Link to="/messaging" className="btn btn-primary"> Go to our messaging system</Link>

        </div>

    );
}






