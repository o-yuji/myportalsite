import Data from './tellList.json';

const TellList = () => {
    console.log(Data)
    return (
        <ul>
            {Data.map((item, index) => {
                return (
                    <li key={index}>{item.title}</li>
                )
            })}
        </ul>
    )
}

export default TellList
