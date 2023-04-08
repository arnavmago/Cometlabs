import Page from "@/layout/Page";
import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import style from "@/styles/markdown-styles.module.css";
import * as React from "react";
import Head from "next/head";


const About = () => {

    return (
        <>
            <Head>
                <title>Privacy Policy | COMETLABS</title>
            </Head>
            <Page>
                <Box sx={{ width: { xs: "100%", md: "60%" }, m: "auto", mb: 5 }}>
                    <ReactMarkdown className={style.reactMarkDown}>
                        {privacy}
                    </ReactMarkdown>
                </Box>
            </Page>
        </>
    )
}

export default About;


const privacy = `
# Terms of Use CometLabs
Updated on: 01/02/2023

Your use of CometLabs' website and services is subject to the terms and conditions set forth in this document. You agree to be bound by these terms by accessing or using the services. 

Please notify us at hi@cometlabs.in before using the services if you do not agree to these terms. These terms apply to all visitors, users, and other individuals who wish to access or use the services provided by CometLabs.


## About CometLabs

CometLabs is owned and operated by CometLabs IT Solutions Private Limited. This domain and its subdomains are owned and operated by the same company, and all related services are provided by the same. Any correspondence that is not required to be sent to the registered office can be sent to the following address: House No. 384, 385, Sector N1, Aliganj, Lucknow, Uttar Pradesh, India - 226024.

## Relevant parties

The terms "we", "us", "website", "platform", and "CometLabs" refer to CometLabs IT Solutions Private Limited and its agents and employees. The terms "you" and "user" refer to the platform's users. Both parties may be referred to collectively as "parties".

## CometLabs as an intermediary

In the absence of a specific service agreement, memorandum of understanding, or contract between CometLabs and the user, CometLabs operates as a free-of-cost intermediary. 

CometLabs provides a platform for users to maintain a public profile, get hired, and provide access to hiring engineers. However, as further stated in clause 8, CometLabs shall not be liable for any cause of action arising from the services provided.

## CometLabs as a service-provider

CometLabs may enter into specific written service agreements, memoranda of understanding, contracts, or other arrangements with hackathon organisers and recruiters. In these cases, CometLabs shall act as a service provider and be responsible for fulfilling its obligations under the written agreement.

## Communications

1. By creating an account with us, you agree to receive newsletters, promotional materials, and other information from CometLabs. You can opt out of these communications by following the unsubscribe link or going to the settings section of your account.

2. Please note that you cannot unsubscribe from system-generated emails, which are essential to maintain the system's privacy and security for members of CometLabs. By default, you will receive notifications for reset password requests, password changes, updates to our privacy policy, code of conduct, terms of use, and any unusual activity related to your account and logins from new devices.

## User Eligibility

To create an account with CometLabs, you must confirm that you are over the age of 13 and that the information provided is accurate, complete, and up-to-date at all times. Inaccurate information may result in the termination of your account. Please inform us immediately if you believe a child under 13 has provided us with personal information.

You are responsible for maintaining the confidentiality of your account and password and for any activities or actions under your account. You must immediately notify us if you become aware of any breach of security or unauthorised use of your account.

## Username Policy

To access certain aspects of the services offered by CometLabs, you must register for an account. The information collected during the registration process is governed by CometLabs' Privacy Policy.

You are prohibited from

1. Using another person's name as your username with the intention to impersonate them.

2. Using a username that is subject to any rights of a person (such as copyrights or trademarks) without proper authorisation.

3. Using a username that CometLabs considered offensive, vulgar, or obscene.

CometLabs reserves the right to deny service, terminate accounts, remove or edit content, or cancel orders at its discretion. CometLabs will make reasonable efforts to remove associated content if you delete your account, but you acknowledge that caching or references to the content may remain.

## Reserved Names

CometLabs maintains a list of reserved names (such as usernames, profile handles, and other synonyms) that are not publicly available. These names may be reserved for trademark protection, avoiding user confusion, security measures, or any other reason. CometLabs reserves the right to change already-claimed names at its discretion and will make a reasonable effort to find a suitable alternative and assist with any related concerns.

## Limitations

CometLabs and its suppliers are not liable for any damages (such as loss of data or profit, or business interruption) arising from the use of its services, even if notified of the possibility of such damages. Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental or consequential damages, which may not apply to you.

## User Obligations and Prohibited Use

The following are the obligations of the users, and any conduct in breach of the same shall deem the use to be prohibited, making such User's access to the platform liable to be revoked:

1. The User shall not publish any material that is false, offensive, harmful, obscene, hateful, pornographic, defamatory, libellous, demeaning, abusive, threatening, or in any other way illegal or infringing upon the legal rights of others or in violation of the Code of Conduct;

2. The User shall not use or solicit another party to use CometLabs for any purpose which is prohibited by applicable law or in violation of the CometLabs Code of Conduct;

3. The User shall not impersonate any other person, input their identification or contact details, create accounts in their name, or falsely state or misrepresent any association or affiliation with such persons;

4. The User shall not willfully engage in any conduct interfering with, disrupting access to, or breaching the security of CometLabs and its website, servers, data, etc., including but not limited to distributed denial-of-service, upload or distribution of corrupted files, viruses and malware.

## Content Policy

The Service provided by CometLabs allows users to post, link, store, share and make available various forms of content, including text, graphics, videos, or other materials. The user is solely responsible for the content they post, including its legality, reliability, and appropriateness.

By posting content on the Service, the user represents and warrants that the content is their own and they have the right to use it and grant CometLabs the rights and license as outlined in these Terms of Use. The user also represents and warrants that the posting of the content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity. CometLabs reserves the right to terminate the account of any user found to be infringing on a copyright.

The user retains the rights to their content and is responsible for protecting those rights. However, by posting content on the Service, the user grants CometLabs the right and license to use, modify, publicly perform, display, reproduce, and distribute such content on and through the Service. This license includes the right for CometLabs to make the user's content available to other users of the Service, who may also use the content subject to these Terms of Use.

CometLabs reserves the right but is not obligated, to monitor and edit all content posted by users. The following policy applies to profiles, comments, articles, and all other works shared on the CometLabs platform:

1. Users must provide accurate information about their work experience, education, certification, community work, and other information on their profiles.

2. Accounts and profiles must not be named in a manner that misleads readers into thinking the user is someone else or a company.

3. The downloading, copying and use of content must not infringe proprietary rights, including but not limited to third-party copyrights, patents, trademarks, or trade secrets.

4. The content must not be obscene, libelous, defamatory, hateful, racially or ethnically objectionable and must not violate any third party's privacy or publicity rights.

## Revisions and Errata

The materials on CometLabs' website may contain technical, typographical, or photographic errors. CometLabs does not guarantee its website's materials' accuracy, completeness, or current status. CometLabs may change the materials on its website at any time without notice.

## Links

CometLabs has not reviewed all of the websites linked to its Internet website and is not responsible for the contents of these linked sites. The inclusion of any link does not imply endorsement by CometLabs of the linked site. The use of a linked website is at the user's own risk.

## Payment

All payments on the website are subject to the terms and conditions of the payment processor, Razorpay. CometLabs shall not be liable for any payment failure.

## Rights Reserved

CometLabs reserves the right to

1. Change these Terms of Use at any time.
2. Start requiring payment for access to the platform, which is currently free, and subsequently change the amount.
3. Restrict access to specific classes of users.
4. Revoke access to the platform for any cause, including but not limited to misconduct and breach of the Agreement.

## Privacy

Data collection and privacy on the website and all its pages shall be governed by the CometLabs Privacy Policy, which can be found [here](https://cometlabs.in/About/TermsPrivacy).

## Warranties and Disclaimers

1. CometLabs and its affiliates make no representation or warranty regarding the services they provide, including any indication that the services will be uninterrupted or error-free. The services, including content and information, are provided on an "as is" and "as available" basis and to the fullest extent permitted under applicable law; CometLabs and its affiliates disclaim any implied or statutory warranty, including any implied warranty of title, data accuracy, non-infringement, merchantability, or fitness for a particular purpose.

2. All information provided on the CometLabs website is for informational purposes only and may be subject to change without notice. CometLabs makes no representations, warranties, or guarantees regarding its products and services' accuracy, completeness, reliability, availability or the security of any data stored on its systems.

3. CometLabs and its affiliates will not be liable for any actions or omissions by third parties that may be illegal or otherwise deficient and will not be responsible for any loss of Profits, lost business opportunities, reputation, loss of data, or any indirect, incidental, consequential, special, or punitive damages. CometLabs does not guarantee the accuracy of the information supplied and displayed by users on their CometLabs profiles.

## External Sites

The CometLabs website may contain links to other applications or websites, including those of third parties. These links are provided for informational and convenience purposes only and shall not be interpreted as an endorsement from CometLabs. CometLabs is not responsible for the content or errors, omissions, violations of third-party rights, or illegal conduct arising from such external sites.

## Trademarks and Logos Policy

The CometLabs logo, brand slogans, iconography, and other assets may only be used with permission from CometLabs. CometLabs reserves all rights, even if certain assets are included in its open-source projects. For questions or to request permission, please contact hi@cometlabs.in. 

All trademarks and logos displayed on the CometLabs website, except for the CometLabs trademark/logo, are owned by their respective companies and are used in accordance with the respective brand guidelines. CometLabs is grateful to all brands displayed on its platform and treats their trademarks and logos respectfully.

## Analytics

CometLabs may use third-party service providers, including Google Analytics and Mixpanel, to monitor and analyse the use of its services. Google Analytics tracks and reports website traffic and may share data with other Google services. For more information on Google's privacy practices, visit [google's policy](https://policies.google.com/privacy?hl=en)  Mixpanel is used to monitor and analyse the use of CometLabs' services, and users may opt-out at [mixpanel](https://mixpanel.com/optout). For more information on the information collected by Mixpanel, visit [mixplanel](https://mixpanel.com/terms/) 


## Governing Law and Dispute Resolution

The laws of India govern these terms, and any legal action or proceeding related to the use of the CometLabs platform or these Terms of Use will be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh, India.

## Indemnification

The user agrees to defend, indemnify, and hold CometLabs harmless from any claims, including third-party claims, liability, damages, and costs arising from or related to the user's use of the platform, conduct in violation of these terms, or any other illegal conduct.

## Miscellaneous

1. Entire Agreement: This document contains all the terms applicable to the use of the website and supersedes all previous undocumented communication, representation, and understandings between the parties.

2. Severability: In the event that any provision of these Terms of Use is deemed unenforceable or invalid, only the affected clause or portion thereof will be struck, and the remaining provisions will remain in full effect. 

## Terms of Use Modifications

CometLabs reserves the right to modify these Terms of Use from time to time. Significant changes will be communicated to users through a website banner or email. Continued use of the website following any changes constitutes acceptance of the updated terms.

## Contact Us

For any inquiries or questions regarding these Terms of Use, please contact us at hi@cometlabs.in 

## Grievance officer

As per the Information Technology Act 2000 and the Consumer Protection (E-Commerce) Rules, 2020, the designated Grievance Officer of CometLabs is as follows:

    Name: Prashant Katiyar 
    Email: prashant@cometlabs.in


`;