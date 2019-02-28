
//create mock messaging items
const createInboxItems = () => {

    const message1 = new Message(1, "There will be conference", "Conference");
    const message2 = new Message(2, "You have been Promoted to position of Senior developer", "Promotion");
    const message3 = new Message(3, "EPIC Mail has been accepted", 'EPIC Mail Status');
    const message4 = new Message(4, "Project deadline has been Postponed", 'EPIC Mail Postponement');
    const message5 = new Message(5, "Max is now CTO", 'New CTO');
    const message6 = new Message(6, "We will be switching from AsynTask to RxAndroid", 'Framework Switch');

    const sender1 = new Sender(1, 'mark@gmail.com', 'Mark');
    const sender2 = new Sender(2, 'john@gmail.com', 'john');
    const sender3 = new Sender(3, 'mercy@rocketMail.com', 'Mercy');
    const sender4 = new Sender(4, 'paul@vk.com', 'Paul');
    const sender5 = new Sender(5, 'scott@yahoo.com', 'Scott');
    const sender6 = new Sender(6, 'beny@live.com', 'Beny');

    sender1.setMessage(message1);
    sender2.setMessage(message2);
    sender3.setMessage(message3);
    sender4.setMessage(message4);
    sender5.setMessage(message5);
    sender6.setMessage(message6);

    const item1 = new InboxItem(sender1, 'Feb 27');
    const item2 = new InboxItem(sender2, 'Feb 15');
    const item3 = new InboxItem(sender3, 'Feb 6');
    const item4 = new InboxItem(sender4, 'Jan 29');
    const item5 = new InboxItem(sender5, 'Jan 25');
    const item6 = new InboxItem(sender6, 'Jan 20');

    return [item1, item2, item3, item4, item5, item6];
};

//create mock members
const createMembers = () => {
    const member1 = new Member(1, 'Mark', 'mark@gmail.com');
    const member2 = new Member(2, 'John', 'john@gmail.com');
    const member3 = new Member(3, 'Mercy', 'mercy@rocketMail.com');
    const member4 = new Member(4, 'Scott', 'scott@yahoo.com');
    const member5 = new Member(5, 'Benedict', 'beny@live.com');
    const member6 = new Member(6, 'Paul', 'paul@vk.com');
    return [member1, member2, member3, member4, member5, member6];
};

//create mock groups
const createGroups = () => {
    const group1 = new Group(1, 'Human Resource');
    const group2 = new Group(2, "Db Team");
    const group3 = new Group(3, 'Management');
    const group4 = new Group(4, 'Dev ops');
    const group5 = new Group(5, 'QA Team');
    let groups = [group1, group2, group3, group4, group5];
    groups.forEach(group => {
        group.setMembers(createMembers())
    });
    return groups;
};