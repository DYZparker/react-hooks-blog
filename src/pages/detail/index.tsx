import { FC , useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import { Spin } from 'antd';
import { CalendarOutlined, TagsOutlined } from '@ant-design/icons';
import { DetailWrapper, ArtTitle, ArtIcon, ArtContent } from './style';
import marked from '../../utils/marked';
import 'highlight.js/styles/gradient-dark.css';
import { getArticleApi } from '../../api';
import { IArticle }	from '../../types'
import { StContext } from '../../store'

const Detail: FC = () => {
	const store = useContext(StContext)
	const storeArticle = store.state.detailArticle
  const initialArticle: IArticle = {
    _id: "",
    title: "",
    tags: [],
    img: "",
		summary: "",
		content: ""
	}
	const history = useHistory()
	const	artcleId = history.location.pathname.split('/').pop()
	const [article, setArticle] = useState<IArticle>(initialArticle)

	useEffect(() => {
		window.scrollTo(0,0)
		if(storeArticle._id === artcleId){
			setArticle(storeArticle)
		}else if(artcleId) {
			getArticleApi(artcleId).then((res) => {
				const result = res.data.result
				setArticle(result)
				store.dispatch!({
					type: 'addDetailArticle',
					state: {
						detailArticle: result
					}
				})
			})
		}
	},[artcleId, storeArticle, store.dispatch])
	
	if(article._id) {
		// 截取_id的前8位十六进制时间戳转换为十进制
		const timeStr = article._id.toString().slice(0, 8)
		return (
			<DetailWrapper>
				<ArtTitle>{article.title}</ArtTitle>
				<ArtIcon>
					<i><CalendarOutlined />{moment(parseInt(timeStr, 16)*1000).format('YYYY-MM-DD')}</i>
					<i><TagsOutlined />{article.tags.join('、')}</i>
				</ArtIcon>
				{article.img ? <img src={article.img} alt={article.title}></img> : <></>}
				<ArtContent dangerouslySetInnerHTML={{ __html: marked(article.summary || '正在加载文章概述...') }} />
				<ArtContent dangerouslySetInnerHTML={{ __html: marked(article.content || '正在加载文章内容...') }} />
			</DetailWrapper>
		)
	}
	return <Spin />
	}

export default Detail