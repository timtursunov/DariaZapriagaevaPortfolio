import React, {useState, useEffect ,useRef} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import EachArtWork from './pages/EachArtWork/EachArtWork';
import Client from './hooks/client'
const App = () => {
  const [art, setArt] = useState([]);
  const [filteredArt, setFilteredArt] = useState([]);
  const [filterType, setFilterType] = useState('all')
  const [footer, setFooter] = useState(false)
  const [modal, setModal] = useState(false)
  const [hoverOnLink, setHoverOnLink] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.getEntries({
          content_type: 'artPiece',
          order: "sys.createdAt"
        })
         const art = response.items
         setArt(art)
         setFilteredArt(art)
      } catch(errors) {
        console.log(errors)
      }
    }
    fetchData()
    }, [])  
    const [preLoader, setpreLoader] = useState(true)
    const [timer, setTimer] = useState(1)
    // for the loader
    const id = useRef(null)
    const clear = () => {
        window.clearInterval(id.current)
        setpreLoader(false)
    }
    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((timer) => {
                return timer - 1
            })
        }, 1700)
    }, [])
    useEffect(() => {
        if(timer === 0 ){
            clear()
        } 
    }, [timer])
    useEffect(() => {
      if (filterType === 'photo') {
        setFilteredArt(art.filter(el => el.fields.type === "image"))
        changeFooterFilter()
      }
      if (filterType === 'video') {
        setFilteredArt(art.filter(el => el.fields.type === "video"))
        changeFooterFilter()
      }
      if (filterType === 'all') {
        setFilteredArt(art)
        changeFooterFilter()
      }
    }, [filterType])

    console.log(art)

  const openModal = () => {
      setModal(prev => !prev)
  }
    const changeFooterFilter = () => {
      setFooter(prev => !prev)
  }
  const CursorHoverOnLink = () => {
    setHoverOnLink(prev => !prev)
}

  return(
    <Router>
      {preLoader ? <div className='loader-wrapper'>
                "loading..."
            </div> :
       <div className='frame'>
        <Switch>
        <Route 
          exact path='/'  
          render={(props) => (
            <MainPage {...props} artworks={filteredArt} setFilterType={setFilterType} changeFooterFilter={changeFooterFilter} footer={footer} setFooter={setFooter} filterType={filterType} modal={modal} setModal={setModal} openModal={openModal} hoverOnLink={hoverOnLink}  CursorHoverOnLink={CursorHoverOnLink}   />
          )}
          />
            {/* <Route 
              exact path='/artwork/:slug'  
              render={(props) => (
                <EachArtWork {...props} artworks={filteredArt}  modal={modal} setModal={setModal} openModal={openModal} CursorHoverOnLink={CursorHoverOnLink} hoverOnLink={hoverOnLink} />
              )}
              /> */}
        </Switch>
        </div>
      }
    </Router>
  )
} 
export default App;