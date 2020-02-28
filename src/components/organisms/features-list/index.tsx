import React from 'react'
import useFeatureService from './api'

export type Props = {
    title: string;
    category: string;
}

const Features: React.FC<Props> = ({ title, category }) => {
    const service = useFeatureService()

    return (
        <div className="o-features-list">
            <span className="a-category">{category}</span>
            <h3 className="a-h3">{title}</h3>
            {service.status === 'loading' && <div>Loading...</div>}
            {service.status === 'loaded' && service.payload
                .slice(-3)
                .map((feature => (
                    <ul key={feature.id}>
                        <li>{feature.title}</li>
                    </ul>
                )))}
            {service.status === 'error' && (
                <div>Cannot fetch datas </div>
            )}

        </div>
    )
}

export default Features

// export default class FeatureClass extends React.Component<Props, State> {

//     render () {
//         return (
//             <div className="o-features-list">
                // <span className="a-category">{this.props.category}</span>
                // <h3 className="a-h3">{this.props.title}</h3>
//             </div>
//         )
//     }
// }