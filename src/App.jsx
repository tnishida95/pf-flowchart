import { useState } from "react";
import "./App.css";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ChartNav from "./assets/ChartNav.jsx";
import { TextField, } from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

function App() {

    const theme = createTheme({
        palette: {
            type: "light"
        }
    });

    // assess budget phase
    const [takeHomePay, setTakeHomePay] = useState(0);
    const [housingPayments, setHousingPayments] = useState(0);
    const [essentialPayments, setEssentialPayments] = useState(0);
    const [healthcarePayments, setHealthcarePayments] = useState(0);
    const [incomeEarningPayments, setIncomeEarningPayments] = useState(0);
    const [minimumDebtPayments, setMinimumDebtPayments] = useState(0);

    // emergency fund phase
    const [emergencyFundContributions, setEmergencyFundContributions] = useState(0);
    const [nonEssentialPayments, setNonEssentialPayments] = useState(0);

    return (
        <>
            <ThemeProvider theme={theme}>
            <h1>Personal Finance Flowchart (US)</h1>

            <ChartNav />

            <div className="whatIsThisDiv">
                <h2>What is this?</h2>
                <p>This flowchart is an interactive adaptation of subreddit&nbsp;
                    <a href="https://www.reddit.com/r/personalfinance/wiki/commontopics">
                        /r/personalfinance's Spending Flowchart
                    </a>.
                If you're unsure about how to handle your income, move through each node step by step.  You can also
                    fill in the text boxes and get an overview of your money.
                </p>
            </div>

            <div className="chartArea">
                <h2>Start here:</h2>

                <section className="sectionAssessBudget" id="sectionAssessBudget">
                    <ChartNode className="budgetBorder budgetBackground"
                               header="Assess Budget"
                               text="In this section, we take care of the necessities and create a budget.  Knowing where money is
                    going will help you to reduce unneeded expenses."
                               noArrow
                    />
                    <br/>
                    <TextField label="Monthly Take Home Pay" variant="outlined" inputProps={{ inputMode: 'numeric' }}
                               value={takeHomePay} onChange={(event) => setTakeHomePay(event.target.value)} />
                    <br />
                    <ArrowDownwardOutlinedIcon />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay Rent/Mortgage"
                               text="When assessing these expenses, include additional costs such as renter's insurance."
                               noArrow
                    />
                    <TextField label="Housing Bills" variant="outlined" inputProps={{ inputMode: 'numeric' }}
                               value={housingPayments} onChange={(event) => setHousingPayments(event.target.value)} />
                    <br />
                    <ArrowDownwardOutlinedIcon />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay for Essentials"
                               text="Pay for groceries, power, water, heat, toiletries, etc."
                               noArrow
                    />
                    <TextField label="Essentials" variant="outlined" inputProps={{ inputMode: 'numeric' }}
                               value={essentialPayments} onChange={(event) => setEssentialPayments(event.target.value)} />
                    <br />
                    <ArrowDownwardOutlinedIcon />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay for Income-Earning Expenses"
                               text="This includes costs such as necessary transportation, internet/phone, etc.  You may
                           have covered this in the 'Essentials' node."
                               noArrow
                    />
                    <TextField label="Income-Earning Payments" variant="outlined" inputProps={{ inputMode: 'numeric' }}
                               value={incomeEarningPayments} onChange={(event) => setIncomeEarningPayments(event.target.value)} />
                    <br />
                    <ArrowDownwardOutlinedIcon />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay for Health Care"
                               text="This includes health care expenses and health care insurance.  You may have covered
                           this in the 'Essentials' node."
                               noArrow
                    />
                    <TextField label="Health Care Bills" variant="outlined" inputProps={{ inputMode: 'numeric' }}
                               value={healthcarePayments} onChange={(event) => setHealthcarePayments(event.target.value)} />
                    <br />
                    <ArrowDownwardOutlinedIcon />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Make Minimum Payments"
                               text="Make minimum payments on all outstanding debts and loans.  This includes things like
                           student loans and credit cards."
                               noArrow
                    />
                    <TextField label="Minimum Debt Payments" variant="outlined" inputProps={{ inputMode: 'numeric' }}
                               value={minimumDebtPayments} onChange={(event) => setMinimumDebtPayments(event.target.value)} />
                    <br />
                    <ArrowDownwardOutlinedIcon />
                </section>

                <section id="sectionEmergencyFund">
                    <ChartNode className="emergencyBorder emergencyBackground"
                               header="Build Small Emergency Fund"
                               text="In a savings or checking account, build a rainy day fund for emergencies.  Either
                               $1,000 or one month's worth of expenses, whichever is greater."
                               noArrow
                    />
                    <br/>
                    <TextField label="Emergency Fund Contributions" variant="outlined" inputProps={{ inputMode: 'numeric' }}
                               value={emergencyFundContributions} onChange={(event) => setEmergencyFundContributions(event.target.value)} />
                    <br />
                    <ArrowDownwardOutlinedIcon />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay Non-Essential Bills in Full"
                               text="These are things such as cable or subscription services.  If times are tough, these
                               expenses are the first to go."
                               noArrow
                    />
                    <br/>
                    <TextField label="Payments for Non-essentials" variant="outlined" inputProps={{ inputMode: 'numeric' }}
                               value={nonEssentialPayments} onChange={(event) => setNonEssentialPayments(event.target.value)} />
                    <br />
                    <ArrowDownwardOutlinedIcon />
                </section>

                <div id="sectionCollectMatches">
                    <ChartNode className="matchesBorder matchesBackground"
                               header="Collect Employer Matches"
                               text="If your employer offers a retirement account with employer-sponsored matching
                               funds, contribute the amount needed to get the full employer match, but no more (at this
                               point)."
                    />
                </div>

                <div id="sectionReduceDebt">
                    <ChartNode className="debtBorder debtBackground"
                               header="Reduce Debt"
                               text="If you have high interest debt (interest rate 10% or higher), pay them off
                               entirely."
                    />
                </div>

                <div id="sectionMeetGoals">
                    <ChartNode className="goalsBorder goalsBackground"
                               header="Hi"
                               text="Hello."
                    />
                </div>

                <div id="sectionSaveMore">
                    <ChartNode className="saveBorder saveBackground"
                               header="Hi"
                               text="Hello."
                    />
                </div>
                <div id="sectionYourFuture">
                    <ChartNode className="futureBorder futureBackground"
                               header="Hi"
                               text="Hello."
                    />
                </div>

            </div>

            <div className="budgetOverview">
                <span>Take Home Pay: ${takeHomePay}</span>
                <br/>
                <span>Bills: ${housingPayments - essentialPayments - incomeEarningPayments - healthcarePayments - minimumDebtPayments - nonEssentialPayments}</span>
                <br/>
                <span>Savings Contributions: ${emergencyFundContributions}</span>
                <br/>
                <span>Leftover: ${takeHomePay - housingPayments - essentialPayments - incomeEarningPayments - healthcarePayments - minimumDebtPayments - nonEssentialPayments - emergencyFundContributions}</span>
            </div>

            <br/><br/><br/><br/><br/><br/><br/>

            </ThemeProvider>
        </>
    )

    function ChartNode(props) {

        return (
            <>
                <div className={`chartNode ${props.className}`}>
                    <div className="nodeHeader">{props.header}</div>
                    <div className="nodeText">{props.text}</div>
                    {props.injection}
                </div>
                {!props.noArrow && <ArrowDownwardOutlinedIcon />}
            </>
        );
    }
}

export default App;
