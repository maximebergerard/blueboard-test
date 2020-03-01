import React from 'react'
import useFeatureService from './api'
import { feature1, feature2, feature3, penHolder, earphones } from '../../images'

const images = [feature1, feature2, feature3]

export type Props = {
    title: string;
    category: string;
}

const Features: React.FC<Props> = ({ title, category }) => {
    const service = useFeatureService()

    return (
        <div className="o-features__list">
            <div className="m-features__images">
                <img src={penHolder} alt="pen holder"/>
                <img src={earphones} alt="earphones"/>
            </div>
            <span className="category">{category}</span>
            <h3>{title}</h3>
            <div className="m-features__items">
                {images.map(images => (
                    <ul key={images} className="a-features__list">
                        <li><img src={images} alt="features"/></li>
                    </ul>
                ))}
            </div>
            <div className="m-features__items">
                {service.status === 'loading' && <div>Loading...</div>}
                {service.status === 'loaded' && service.payload
                    .slice(4, 7)
                    .map((feature => (
                        <ul key={feature.id} className="a-features__list">
                            <li className="list__title">{feature.title}</li>
                            <li className="list__body">{feature.body}</li>
                        </ul>
                    )))}
                {service.status === 'error' && (
                    <div>Cannot fetch datas </div>
                )}
            </div>

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