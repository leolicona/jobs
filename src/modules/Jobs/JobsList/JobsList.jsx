import Card from '@components/Card/Card'
import Tag from '../../../components/Tags/Tag'
import IconTag from '@components/Tags/IconTag/IconTag'
import { info, location } from './jobsList.module.css'

import clock from '../../../assets/clock.svg'

function JobsList () {
    return (
        <>
            <Card
                title="Title"
                legend="Description"
            >
                <div className={info}>
                    <Tag>Tag</Tag>
                    <div className={location}>
                        <IconTag src={clock}>
                           <address>Location</address>
                        </IconTag>
                        <IconTag src={clock}>
                            <time dateTime="2021-09-01" >September 1, 2021</time>
                        </IconTag>
                    </div>
                </div>
            </Card>
        </>
    )
}
export default JobsList;

