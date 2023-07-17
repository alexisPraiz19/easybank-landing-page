// Componentes de complementación
import Choose from "../common/Choose";

// Componente principal de exportación
export default function WhyChoose(): JSX.Element{
    return (
        <section className="why-choose">
            <div className="why-choose-text">
                <h2 className="title-color">Why choose Easybank?</h2>

                <p className="text-color">
                    We leverage Open Banking to turn your bank account into your financial hub.
                    Control your finances like never before.
                </p>
            </div>

            <div className="reasons">
                <Choose
                icon  = "/assets/icons/icon-online.svg"
                title = "Online Banking"
                text  = "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                />

                <Choose
                icon  = "/assets/icons/icon-budgeting.svg"
                title = "Simple Budgeting"
                text  = "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
                />

                <Choose
                icon  = "/assets/icons/icon-onboarding.svg"
                title = "Fast Onboarding"
                text  = "We don't do branches Open your account in minutes online and start taking control of your finances right away."
                />

                <Choose
                icon  = "/assets/icons/icon-api.svg"
                title = "Open API"
                text  = "Manage your savings, invesments, pension, and munch more from one account. Tracking your money has never been easier."
                />
            </div>
        </section>
    );
}