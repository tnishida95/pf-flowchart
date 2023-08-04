import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined.js";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined.js";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined.js";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined.js";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined.js";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined.js";
import SignpostOutlinedIcon from "@mui/icons-material/SignpostOutlined.js";

export default function ChartNav() {

    function NavItem(props) {
        return (
            <a href={props.hrefText} className={`navItem ${props.className}`}>
                {props.icon}
                <div className="navText">{props.text}</div>
            </a>
        );
    }

    return (
        <nav>
            <a href="#sectionAssessBudget">
                <NavItem className="budgetBorder"
                         icon={<InsertChartOutlinedIcon />}
                         text="Assess Budget"
                />
            </a>
            <a href="#sectionEmergencyFund">
                <NavItem className="emergencyBorder"
                         icon={<ThunderstormOutlinedIcon />}
                         text="Emergency Fund"
                />
            </a>
            <a href="#sectionCollectMatches">
                <NavItem className="matchesBorder"
                         icon={<HandshakeOutlinedIcon />}
                         text="Collect Matches"
                />
            </a>
            <a href="#sectionReduceDebt">
                <NavItem className="debtBorder"
                         icon={<TrendingDownOutlinedIcon />}
                         text="Reduce Debt"
                />
            </a>
            <a href="#sectionMeetGoals">
                <NavItem className="goalsBorder"
                         icon={<LocalGroceryStoreOutlinedIcon />}
                         text="Meet Goals"
                />
            </a>
            <a href="#sectionSaveMore">
                <NavItem className="saveBorder"
                         icon={<EggOutlinedIcon />}
                         text="Save More"
                />
            </a>
            <a href="#sectionYourFuture">
                <NavItem className="futureBorder"
                         icon={<SignpostOutlinedIcon />}
                         text="Your Future"
                />
            </a>
        </nav>
    );
}