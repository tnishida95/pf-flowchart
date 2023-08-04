import { useState } from "react";
import "./App.css";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ChartNav from "./assets/ChartNav.jsx";

function App() {

    return (
        <>
            <h1>Personal Finance Flowchart (US)</h1>

            <ChartNav />

            <div className="chartArea">
                <h2>START</h2>

                <div id="sectionAssessBudget">
                    <ChartNode className="budgetBorder budgetBackground"
                               header="Assess Budget"
                               text="In this section, we take care of the necessities and create a budget.  Knowing where money is
                    going will help you to reduce unneeded expenses."
                    />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay Rent/Mortgage"
                               text="When assessing these expenses, include additional costs such as renter's insurance."
                    />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay for Essentials"
                               text="Pay for groceries, power, water, heat, toiletries, etc."
                    />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay for Income-Earning Expenses"
                               text="This includes costs such as necessary transportation, internet/phone, etc.  You may
                           have covered this in the 'Essentials' node."
                    />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay for Health Care"
                               text="This includes health care expenses and health care insurance.  You may have covered
                           this in the 'Essentials' node."
                    />

                    <ChartNode className="budgetBorder budgetBackground"
                               header="Make Minimum Payments"
                               text="Make minimum payments on all outstanding debts and loans.  This includes things like
                           student loans and credit cards."
                    />
                </div>

                <div id="sectionEmergencyFund">
                    <ChartNode className="emergencyBorder emergencyBackground"
                               header="Build Small Emergency Fund"
                               text="In a savings or checking account, build a rainy day fund for emergencies.  Either
                               $1,000 or one month's worth of expenses, whichever is greater."
                    />
                    <ChartNode className="budgetBorder budgetBackground"
                               header="Pay Non-Essential Bills in Full"
                               text="These are things such as cable or subscription services.  If times are tough, these
                               expenses are the first to go."
                    />
                </div>

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

        </>
    )

    function ChartNode(props) {

        return (
            <>
                <div className={`chartNode ${props.className}`}>
                    <div className="nodeHeader">{props.header}</div>
                    <div className="nodeText">{props.text}</div>
                </div>
                {!props.noArrow && <ArrowDownwardOutlinedIcon />}
            </>
        );
    }
}

export default App;
