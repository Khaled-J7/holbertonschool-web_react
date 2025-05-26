import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders the correct number of NotificationItem components when listNotifications is provided', () => {
		const listNotifications = [
			{
				id: 1,
				html: { __html: '<p>Notification 1</p>' },
				type: 'default',
				value: '',
			},
			{
				id: 2,
				html: { __html: '<p>Notification 2</p>' },
				type: 'urgent',
				value: '',
			},
		];
		const wrapper = shallow(
			<Notifications
				listNotifications={listNotifications}
				displayDrawer={true}
			/>
		);
		expect(wrapper.find(NotificationItem)).toHaveLength(
			listNotifications.length
		);
	});

	it("renders 'No new notification for now' when listNotifications is empty", () => {
		const wrapper = shallow(
			<Notifications listNotifications={[]} displayDrawer={true} />
		);
		expect(wrapper.text()).toContain('No new notification for now');
	});

	it("does not render 'Here is the list of notifications' when listNotifications is empty", () => {
		const wrapper = shallow(
			<Notifications listNotifications={[]} displayDrawer={true} />
		);
		expect(wrapper.text()).not.toContain('Here is the list of notifications');
	});

	it('renders the correct number of NotificationItem components when listNotifications is not empty', () => {
		const listNotifications = [
			{
				id: 1,
				html: { __html: '<p>Notification 1</p>' },
				type: 'default',
				value: '',
			},
			{
				id: 2,
				html: { __html: '<p>Notification 2</p>' },
				type: 'urgent',
				value: '',
			},
		];
		const wrapper = shallow(
			<Notifications
				listNotifications={listNotifications}
				displayDrawer={true}
			/>
		);
		expect(wrapper.find(NotificationItem)).toHaveLength(
			listNotifications.length
		);
		it('calls markAsRead with the correct id when a NotificationItem is clicked', () => {
			const listNotifications = [
				{
					id: 1,
					html: { __html: '<p>Notification 1</p>' },
					type: 'default',
					value: '',
				},
			];
			const mockMarkAsRead = jest.fn();
			const wrapper = shallow(
				<Notifications
					listNotifications={listNotifications}
					displayDrawer={true}
					markAsRead={mockMarkAsRead}
				/>
			);

			const notificationItem = wrapper.find(NotificationItem).first();
			notificationItem.simulate('click');

			expect(mockMarkAsRead).toHaveBeenCalledWith(1);
		});
		it('does not re-render when listNotifications prop is updated with the same length', () => {
			const listNotifications = [
				{
					id: 1,
					html: { __html: '<p>Notification 1</p>' },
					type: 'default',
					value: '',
				},
			];
			const wrapper = shallow(
				<Notifications
					listNotifications={listNotifications}
					displayDrawer={true}
				/>
			);

			wrapper.setProps({ listNotifications: [...listNotifications] });
			wrapper.update();

			expect(wrapper.find(NotificationItem)).toHaveLength(
				listNotifications.length
			);
		});

		it('re-renders when listNotifications prop is updated with a longer list', () => {
			const initialListNotifications = [
				{
					id: 1,
					html: { __html: '<p>Notification 1</p>' },
					type: 'default',
					value: '',
				},
			];
			const updatedListNotifications = [
				...initialListNotifications,
				{
					id: 2,
					html: { __html: '<p>Notification 2</p>' },
					type: 'urgent',
					value: '',
				},
			];

			const wrapper = shallow(
				<Notifications
					listNotifications={initialListNotifications}
					displayDrawer={true}
				/>
			);

			expect(wrapper.find(NotificationItem)).toHaveLength(
				initialListNotifications.length
			);

			wrapper.setProps({ listNotifications: updatedListNotifications });
			wrapper.update();

			expect(wrapper.find(NotificationItem)).toHaveLength(
				updatedListNotifications.length
			);
		});
		it('should call handleDisplayDrawer when the menu item is clicked', () => {
			const handleDisplayDrawer = jest.fn();
			const wrapper = shallow(
				<Notifications handleDisplayDrawer={handleDisplayDrawer} />
			);

			wrapper.find('.menuItem').simulate('click');
			expect(handleDisplayDrawer).toHaveBeenCalled();
		});

		it('should hide the drawer when handleHideDrawer is clicked', () => {
			const handleHideDrawer = jest.fn();
			const wrapper = shallow(
				<Notifications
					displayDrawer={true}
					handleHideDrawer={handleHideDrawer}
				/>
			);

			wrapper.find('button[aria-label="close"]').simulate('click');
			expect(handleHideDrawer).toHaveBeenCalled();
		});
	});
});
