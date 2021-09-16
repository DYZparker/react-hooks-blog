import { FC, useState, useMemo } from 'react'
import { useHistory } from "react-router-dom"
import { Menu } from 'antd'

const menuList = [
  {
    "title": "首页",
    "path": "/"
  },
  {
      "title": "H5",
      "path": "/subject/html"
  },
  {
      "title": "JavaScript",
      "path": "/subject/javascript"
  },
  {
      "title": "React",
      "path": "/subject/react"
  },
  {
      "title": "Vue",
      "path": "/subject/vue"
  },
  {
      "title": "Flutter",
      "path": "/subject/flutter"
  },
  {
      "title": "Node",
      "path": "/subject/node"
  },
  {
      "title": "Other",
      "path": "/subject/other"
  },
  {
      "title": "关于",
      "path": "/about"
  }
]

const MenuList: FC = () => {
  let history = useHistory()
  const [pathName, clickTag] = useState(history.location.pathname)

	return useMemo(() => {
    return (
      <Menu 
        onClick={(e) => {
          clickTag(e.key)
          history.push(e.key)
        }} 
        selectedKeys={[pathName]} 
        mode="horizontal"
      >
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
  }, [ pathName, history])
}

export default MenuList