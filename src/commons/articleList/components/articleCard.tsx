import { FC, useMemo } from 'react'
import { IArticle } from '../../../types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { CalendarOutlined, TagsOutlined } from '@ant-design/icons'
import { CardWrapper } from '../style'

// 单独封装文章列表卡片，用useMemo包裹组件避免懒加载更多列表时已在页面的列表重新渲染
const ArticleCard: FC<IArticle> = (props) => {
  // 注意：如果用props作为useMemo数组里的依赖项，组件依然会重新渲染
	const { _id, title, tags, img, summary } = props
  // 截取_id的前8位十六进制时间戳转换为十进制
  const timeStr = _id.toString().slice(0, 8)
  
	return useMemo(() => {
    return (
      <CardWrapper>
        {console.log('ArticleCard渲染了',title)}
        <div className="card-title"><Link to={'/detail/' + _id}>{title}</Link></div>
        <div className="card-icon">
          <i><CalendarOutlined />{moment(parseInt(timeStr, 16)*1000).format('YYYY-MM-DD')}</i>
          <i><TagsOutlined />{tags.join('、')}</i>
        </div>
        <div className="card-context">
          {img ? <img src={img} alt={title}></img> : <></>}
          <p>{summary}</p>
        </div>
        <div className="card-go"><Link to={'/detail/' + _id}>查看全文 &gt; </Link></div>
      </CardWrapper>
    )
  },[_id, title, tags, img, summary, timeStr])
}

export default ArticleCard