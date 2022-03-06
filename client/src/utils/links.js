import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import BarChartIcon from '@mui/icons-material/BarChart'
import CoPresentIcon from '@mui/icons-material/CoPresent'

const links = [
  { name: 'Stats', path: '/', id: 1, icon: <BarChartIcon /> },
  { name: 'Student', path: '/students', id: 2, icon: <CoPresentIcon /> },
  {
    name: 'Student Registration',
    path: '/students/add',
    id: 3,
    icon: <PersonAddAltIcon />,
  },
]

export default links
