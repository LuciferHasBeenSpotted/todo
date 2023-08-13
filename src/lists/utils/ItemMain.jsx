import TrashIcon from './itemsvgs/TrashIcon';
import ArrowUpIcon from './itemsvgs/ArrowUpIcon';
import ArrowDownIcon from './itemsvgs/ArrowDownIcon';
import PenIcon from './itemsvgs/PenIcon';

export default function ItemMain(props) {
    function handleOnMouseEnter() {
        props.setSelected(true);
    };

    function handleOnMouseLeave() {
        props.setSelected(false);
    };
    return (
        <div 
            style = {{
                width: '100%', 
                backgroundColor: props.selected ? 'grey' : 'white',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            onMouseEnter = {() => handleOnMouseEnter()}
            onMouseLeave = {() => handleOnMouseLeave()}
        >
            <div
                style = {{
                    width: '5%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginLeft: 5
                }}
            >
                {
                    props.selected && props.itemID != 0 ? 
                        <ArrowUpIcon 
                            {...props}
                        /> : null

                }
            </div>
            <div
                style = {{
                    width: '85%',
                    textAlign: 'left',
                    marginLeft: 15
                }}
            >   
                    ⋅ {props.content}
            </div>
            <div
                style = {{
                    width: '10%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginRight: 5
                }}
            >


                {
                    props.selected ? 
                        <>
                            <TrashIcon {...props} />
                            <PenIcon {...props} />
                        </>
                        : null
                }
                {
                    props.selected && props.itemID != props.numberOfItem -1? 
                        <ArrowDownIcon {...props} />
                        : null
                }
            </div>
        </div>
    )
}