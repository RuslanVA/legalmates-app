import React, {Component} from "react";
import "./Faq.scss";
import FaqItem from "./FaqItem/FaqItem";

class Faq extends Component {

    handleClick = (e) => {
        if (!e.currentTarget.parentNode.classList.contains('active')) {
            e.currentTarget.parentNode.classList.add('active');
        } else {
            e.currentTarget.parentNode.classList.remove('active');
        }
    };

    render() {

        const data = [
            {
                id: 1,
                title: "What does the application process consist of?",
                desc: "Legal Mates is a free service for licensed attorneys, but is closed to the public. In order to become a member, simply sign up, and within a few hours, we will verify your details through a combination of your LinkedIn and State Bar number. After that, you’re ready to refer cases...efficiently. "
            },
            {
                id: 2,
                title: "What do I need to create an account?",
                desc: "Your LinkedIn profile and State Bar number. "
            },
            {
                id: 3,
                title: "How can Legal Mates help my business?",
                desc: "Through Legal Mates you can refer cases to the lawyers you believe are best suited to handle your cases, without having a personal relationship with them. More importantly, you can do this efficiently, with minimal communication, while maximizing your profits through having attorneys bid on your case. And if you’re searching for cases, you now have a much wider net. So now, you can find cases that you may never have been aware of or exposed to. Plus it’s free, so it can’t hurt!"
            }
        ];

        return (
            <div className="faq">
                <h2>
                    FAQ
                </h2>
                <ul className="faq-list">

                    {data.map((item) => {
                        const itemClassName = (item.id === 1) ? 'active' : null;
                        return (
                            <FaqItem
                                itemClassName={itemClassName}
                                key={item.id}
                                title={item.title}
                                desc={item.desc}
                                onclick={this.handleClick}
                            />
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default Faq;
