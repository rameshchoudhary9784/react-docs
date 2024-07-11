---
layout: page
sidebar: false
---

<script setup>
    import {
        VPTeamPage,
        VPTeamPageTitle,
        VPTeamMembers,
        VPTeamPageSection
    } from 'vitepress/theme';

    const coreMembers = [
        {
            avatar: 'https://avatars.githubusercontent.com/u/129822410?v=4',
            name: 'Ramesh Choudhary',
            title: 'Founder of',
            desc: 'Currently working as a Senior Software Engineer at Capgemini',
            links: [
                { icon: 'github', link: 'https://github.com/Rameshchoudhary9784' },
                { icon: 'linkedin', link: 'https://www.linkedin.com/in/ramesh-choudhary-ba5590180/' }
            ],
            org: 'React Docs'
        }
    ];

    const partners = [
        {
            avatar: 'https://media.licdn.com/dms/image/D5603AQE0zQgSllaC2A/profile-displayphoto-shrink_800_800/0/1690883493340?e=1726099200&v=beta&t=Xc_AED7TVk9DVsigjDyCOrkp8T2XUuH6PZ-tPNIE6ak',
            name: 'Thyagaraju Bajanthri',
            title: 'Sr. Software Engineer',
            desc: 'Currently working at Capgemini',
            links: [
                { icon: 'github', link: '#' },
                { icon: 'linkedin', link: 'https://www.linkedin.com/in/thyagaraju-bajanthri-b51527168/' }
            ]
        },
        {
            avatar: 'https://media.licdn.com/dms/image/C5603AQFXex0zar57lg/profile-displayphoto-shrink_400_400/0/1623078569712?e=1726099200&v=beta&t=DxeANeHJA9EGvY2sEdBhXufOguokwn6_lYe5bun0sFo',
            name: 'Kishan Kumar Kulkarni',
            title: 'Sr. Software Engineer',
            desc: 'Currently working at Capgemini',
            links: [
                { icon: 'github', link: '#' },
                { icon: 'linkedin', link: 'https://www.linkedin.com/in/kishankumar-kulkarni/' }
            ]
        },
        {
            avatar: 'https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
            name: 'Yasmeen Taj Syed',
            title: 'Associate Consultant',
            desc: 'Currently working at Capgemini',
            links: [
                { icon: 'github', link: '#' },
                { icon: 'linkedin', link: 'https://www.linkedin.com/in/yasmeen-taj-syed-2316851b5/' }
            ]
        }
    ];
</script>


<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>Core Contributors</template>
        <template #lead>These are the core contributors</template>
    </VPTeamPageTitle>
    <VPTeamMembers 
        size="medium"
        :members="coreMembers"
    />
    <VPTeamPageSection>
        <template #title>Partners</template>
        <template #lead>These are the partners</template>
        <template #members>
            <VPTeamMembers 
                size="small"
                :members="partners"
            />
        </template>
    </VPTeamPageSection>
</VPTeamPage>