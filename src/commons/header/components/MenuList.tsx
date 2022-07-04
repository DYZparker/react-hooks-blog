import { FC, useState, useMemo, useEffect, useContext } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { Menu } from 'antd'
import { StContext } from '../../../store'

const MenuList: FC = () => {
  let history = useHistory()
  let location = useLocation()
  const [clickName, clickTag] = useState(location.pathname)

  const store = useContext(StContext)
  const { detailArticle } = store.state
  const list = ['javascript', 'vue', 'react', 'node', 'flutter', 'css', 'Other',]
  const mapList = list.map((item) => {
    return {title: item, path: `/subject/${item}`}
  })
  // 添加首页和关于
  const menuList = useMemo(() => {
    return [{"title": "首页", "path": "/"}, ...mapList, {"title": "关于", "path": "/about"}]
  }, [mapList])

	useEffect(() => {
    // 跳转或刷新页面后，判断文章列表页或具体文章页的Menu激活标签
    const { _id, tags } = detailArticle
    const pathName = location.pathname
    if(_id && pathName.includes('/detail')) {
      const	locationId = pathName.split('/').pop()
      if(_id !== locationId) {
        return
      }
      tags.forEach((item) => {
        const checkName = menuList.some((i) => i.title === item)
        if(checkName){
          clickTag(`/subject/${item}`)
        }else{
          clickTag('/subject/other')
        }
      })
    }else if(!pathName.includes('/detail')) {
      const checkName = menuList.some((i) => i.path === pathName)
      if(checkName){
        clickTag(pathName)
      }else{
        clickTag('/subject/other')
      }
    }
	},[detailArticle, location.pathname, menuList])

	return useMemo(() => {
    return (
      <Menu 
        onClick={(e) => {
          clickTag(e.key)
          history.push(e.key)
        }} 
        selectedKeys={[clickName]} 
        mode="horizontal"
      >
        {console.log('MenuList渲染了')}
        {
          menuList.map(item => {
            return (
              <Menu.Item key={item.path}>
                  <span>{item.title}</span>
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }, [ clickName, history, menuList])
}

export default MenuList